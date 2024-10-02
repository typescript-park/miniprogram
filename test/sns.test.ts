import { Sns, Session } from "../src/sns";

describe("Sns", () => {
  it("jscode2session should return a Session instance", async () => {
    const appid = process.env.APPID || "";
    const secret = process.env.SECRET || "";
    const js_code = process.env.JS_CODE || "";

    const session = await new Sns().jscode2session(appid, secret, js_code);
    console.log(session);

    expect(session).toBeInstanceOf(Session);
  });
});
