import * as React from 'react';
import styles from './MainProfilePhoto.module.scss';
import MyPhoto from '../Images/MyPhoto.jpg'
import NoProfile from '../Images/NoProfile.jpg'
export interface IMainProfilePhotoProps { }

export interface IMainProfilePhotoState { }

export default class MainProfilePhoto extends React.Component<IMainProfilePhotoProps, IMainProfilePhotoState> {
  public render(): React.ReactElement<IMainProfilePhotoProps> {
    console.log({ MyPhoto });
    return (
      <div className={styles.container}>
        <img className={styles.imgProfile} src={NoProfile} alt='No Profile' />
      </div>
    );
  }
}
