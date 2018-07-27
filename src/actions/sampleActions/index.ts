export type ActionTypes =
  | SampleAction;

export type SampleAction = {
  readonly type: 'SAMPLE_ACTION';
}

export const sampleAction = (): SampleAction => ({
  type: 'SAMPLE_ACTION',
})