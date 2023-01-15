import * as React from 'react';

export interface IHeaderProps {}

export interface IHeaderState {}

export default class Header extends React.Component<IHeaderProps, IHeaderState> {
  public render(): React.ReactElement<IHeaderProps> {
    return (
      <div>
        <h2>HMD Portfolio</h2>
      </div>
    );
  }
}
