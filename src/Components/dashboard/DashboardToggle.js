import React, { useCallback } from "react";
import { Alert, Button, Drawer, Icon } from "rsuite";
import DashBoard from ".";
// eslint-disable-next-line no-unused-vars
import { isOfflineForDatabase, isOnlineForDatabase } from "../../App";
import { useModalState } from "../../misc/custom-hooks";
import { auth, database } from "../../misc/firebase";
import "../../Styles/Drawer.css";
const DashboardToggle = () => {
  console.log("DashBoardToggle");
  const { isOpen, open, close } = useModalState(); 

  const onSignOut = useCallback(() => {
    database
      .ref(`/status/${auth.currentUser.uid}`)
      .set(isOfflineForDatabase)
      .then(() => {
        auth.signOut();

        Alert.success("Signed Out", 4000);

        close();
      })
      .catch((error) => {
        Alert.error(error.message);
      });
  }, [close]);

  return (
    <>
      <Button block color="blue" onClick={open}>
        <Icon icon="dashboard" /> Dashboard
      </Button>

      <Drawer
        className="drawer"
        full={window.innerWidth <= 992 ? true : false}
        show={isOpen}
        onHide={close}
        placement="left"
        backdrop
      >
        <DashBoard onSignOut={onSignOut} />
      </Drawer>
    </>
  );
};

export default DashboardToggle;
