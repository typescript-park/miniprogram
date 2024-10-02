import axios from "axios";

export class Session {
  session_key!: string;
  unionid!: string;
  errmsg!: string;
  openid!: string;
  errcode!: number;
}

export class Sns {
  async jscode2session(
    appid: string,
    secret: string,
    js_code: string,
    grant_type: string = "authorization_code"
  ): Promise<Session> {
    const response = await axios.get(
      "https://api.weixin.qq.com/sns/jscode2session",
      {
        params: {
          appid,
          secret,
          js_code,
          grant_type,
        },
      }
    );

    const data = response.data;

    const session = new Session();
    session.session_key = data.session_key;
    session.unionid = data.unionid;
    session.errmsg = data.errmsg;
    session.openid = data.openid;
    session.errcode = data.errcode;

    return session;
  }
}
