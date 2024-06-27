export enum OnlineOrderState {
  PREPARING, SENT, DELIVERED
}

export const OnlineOrderState2LabelMapping: Record<OnlineOrderState, string> = {
  [OnlineOrderState.PREPARING]: "PREPARING",
  [OnlineOrderState.SENT]: "SENT",
  [OnlineOrderState.DELIVERED]: "DELIVERED"
}

