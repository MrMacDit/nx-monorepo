export function sharedLib(): string {
  return 'shared-lib';
}

export const sharedState = {
  data: '',
  updateData(newData: string) {
    this.data = newData;
  },
};
