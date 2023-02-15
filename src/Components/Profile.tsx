import * as React from 'react';

export interface IProfileProps {}

export interface IProfileState {}

export default class Profile extends React.Component<IProfileProps, IProfileState> {
  public render(): React.ReactElement<IProfileProps> {
    return (
      <div>
        <h2>HMD Portfolio</h2>
      </div>
    );
  }
}
