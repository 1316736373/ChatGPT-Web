import { ss } from '@/utils/storage'

const LOCAL_NAME = 'userStorage'

export interface UserInfo {
  avatar: string
  name: string
  description: string
}

export interface UserState {
  userInfo: UserInfo
}

export function defaultSetting(): UserState {
  return {
    userInfo: {
      avatar: 'https://worldgz.photo.store.qq.com/psc?/worldlogo/O0cFsaTfOlqjIAnYAvw8WjVg226xOzHJrHqLHhAR.XxFOHBZQ.qf*ryetBTdBtm6BUodbd4wKDWfBOdRwEnFuB628N3WATWNamubswMlm80!/m&bo=gAKAAoACgAIRHyg!',
      name: 'QQ群：741785402',
      description: 'Star on <a href="http://qm.qq.com/cgi-bin/qm/qr?_wv=1027&k=votE2iRETpMV_KcLTqCBw9oqM22S4zMb&authKey=6%2FljpbebmrzPdOXSmIuOdxiHWiqabYY1wYzcRzu31Kwz7N7EG1wIdeJnMlBwYoMH&noverify=0&group_code=741785402" class="text-blue-500" target="_blank" >QQ群：741785402</a>',
    },
  }
}

export function getLocalState(): UserState {
  const localSetting: UserState | undefined = ss.get(LOCAL_NAME)
  return { ...defaultSetting(), ...localSetting }
}

export function setLocalState(setting: UserState): void {
  ss.set(LOCAL_NAME, setting)
}
