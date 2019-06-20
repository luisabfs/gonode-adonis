"use strict";

const Task = use("App/Models/Task");

class TaskController {
  async index({ request, response, view }) {
    const tasks = await Task.query()
      .where("project_id", params.projects_id)
      .with("user")
      .fetch();
  }

  async store({ request, params }) {}

  async show({ params, request, response, view }) {}

  async update({ params, request, response }) {}

  async destroy({ params, request, response }) {}
}

module.exports = TaskController;
