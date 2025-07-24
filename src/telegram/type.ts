import { Scenes } from "telegraf";

interface MySession extends Scenes.SceneSession {
  inviteCode?: string;
}

export interface EditWalletSceneState {
  walletId?: string;
  // 你还可以加其它字段
}

export type MyContext = Scenes.SceneContext & { session: MySession };

