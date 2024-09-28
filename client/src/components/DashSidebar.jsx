import React from "react";
import { Sidebar } from "flowbite-react";
import {
  HiAnnotation,
  HiArrowSmRight,
  HiChartPie,
  HiDocumentText,
  HiOutlineUserGroup,
  HiUser,
} from "react-icons/hi";
import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { signoutSuccess } from "../redux/user/userSlice";
import { useDispatch, useSelector } from "react-redux";

export default function DashSidebar() {
  const location = useLocation();
  const [tab, setTab] = useState("");
  const dispatch = useDispatch();
  const { currentUser } = useSelector((state) => state.user);

  useEffect(() => {
    const urlParams = new URLSearchParams(location.search);
    const tabFromUrl = urlParams.get("tab");
    if (tabFromUrl) {
      setTab(tabFromUrl);
    }
  }, [location.search]);

  const handleSignout = async () => {
    try {
      const res = await fetch("/api/user/signout", {
        method: "POST",
      });
      const data = await res.json();
      if (!res.ok) {
        console.log(data.message);
      } else {
        dispatch(signoutSuccess(data));
      }
    } catch (error) {
      console.log(error.message);
    }
  };

  return (
    <div>
      <Sidebar className="w-full md:w-56">
        <Sidebar.Items>
          <Sidebar.ItemGroup className="flex flex-col gap-1">
          {currentUser.isAdmin && (
              <Sidebar.Item
                as={Link}
                to="/dashboard?tab=dash"
                active={tab === "dash" || !tab}
                icon={HiChartPie}
              >
                DashBoard
              </Sidebar.Item>
            )}
            <Sidebar.Item
              as={Link}
              to="/dashboard?tab=profile"
              active={tab === "profile"}
              icon={HiUser}
              label={currentUser.isAdmin ? "Admin" : "User"}
              labelColor="dark"
            >
              Profile
            </Sidebar.Item>
            {currentUser.isAdmin && (
              <Sidebar.Item
                as={Link}
                to="/dashboard?tab=posts"
                active={tab === "posts"}
                icon={HiDocumentText}
              >
                Posts
              </Sidebar.Item>
            )}
            {currentUser.isAdmin && (
              <>
                <Sidebar.Item
                  as={Link}
                  to="/dashboard?tab=users"
                  active={tab === "users"}
                  icon={HiOutlineUserGroup}
                >
                  Users
                </Sidebar.Item>
                <Sidebar.Item
                  as={Link}
                  to="/dashboard?tab=comments"
                  active={tab === "comments"}
                  icon={HiAnnotation}
                >
                  Comments
                </Sidebar.Item>
              </>
            )}
            <Sidebar.Item
              icon={HiArrowSmRight}
              className="cursor-pointer"
              onClick={handleSignout}
            >
              Sign Out
            </Sidebar.Item>
          </Sidebar.ItemGroup>
        </Sidebar.Items>
      </Sidebar>
    </div>
  );
}
