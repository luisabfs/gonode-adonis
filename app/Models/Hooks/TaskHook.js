"use strict";

const Mail = use("Mail");
const Helpers = use("Helpers");

const TaskHook = (exports = module.exports = {});

TaskHook.sendNewTaskMail = async taskInstance => {
  if (!taskInstance.user_id || !taskInstance.dirty.user_id) {
    return;
  }

  console.log("MAIL");
};
