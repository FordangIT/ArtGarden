import { useSession } from "next-auth/react";
import { useRouter } from "next/router";
import { useEffect } from "react";
import * as React from "react";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import Divider from "@mui/material/Divider";

const style = {
  p: 0,
  width: "100%",
  maxWidth: 360,
  borderRadius: 2,
  border: "1px solid",
  borderColor: "divider",
  backgroundColor: "background.paper"
};

export default function MyPage() {
  const { data: session } = useSession();
  const router = useRouter();
  useEffect(() => {
    if (!session) {
      //모달창으로 로그인이 필요한 페이지입니다.
      router.push(`${process.env.NEXT_PUBLIC_FRONTEND_URL}/auth/signin`);
    }
  }, []);

  return (
    <>
      {session && (
        <div className="flex flex-col">
          <div>{session.user?.name}님 반갑습니다</div>
          <div className="border-2 border-black w-full sm:w-2/3 min-h-fit">
            <List sx={style} aria-label="mailbox folders">
              <ListItem>
                <ListItemText primary="Inbox" />
              </ListItem>
              <Divider component="li" />
              <ListItem>
                <ListItemText primary="Drafts" />
              </ListItem>
              <Divider component="li" />
              <ListItem>
                <ListItemText primary="Trash" />
              </ListItem>
              <Divider component="li" />
              <ListItem>
                <ListItemText primary="Spam" />
              </ListItem>
            </List>
          </div>
        </div>
      )}
    </>
  );
}
