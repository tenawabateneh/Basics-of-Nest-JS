import { Controller, Get } from "@nestjs/common";

@Controller('/app')
export class AppController {
  // getRootRoute route handler
  @Get()
  getRootRoute() {
    return "<h1>Hi there NEST_JS</h1>"
  }

  @Get("hello")
  getGreetings() {
    return "<h2> Hello, nest! · A progressive Node.js framework for building efficient, reliable and scalable server-side applications. </h2>"
  }
}