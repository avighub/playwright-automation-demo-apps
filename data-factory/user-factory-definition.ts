import { Factory } from "rosie";

/**
 * Using Factory Defition from Rosie library
 */

Factory.define("user")
  // .sequence("id")
  .attr("firstName", "Avishek")
  .attr("lastName", "Behera")
  .attr("username", "Avishek")
  .attr("password", "Behera");

export default Factory;
