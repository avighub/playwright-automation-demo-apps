import { Factory } from "rosie";

/**
 * Using Unregistered Factory from Rosie library
 */

export default new Factory()
  .sequence("id")
  .attr("firstName", "Avishek")
  .attr("lastName", "Behera")
  .attr("username", "Avishek")
  .attr("password", "Behera");
