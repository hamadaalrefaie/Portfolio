import { MDBIcon, MDBInput } from 'mdb-react-ui-kit';
import * as React from 'react';
import styles from './HMDBot.module.scss';
export interface IHMDBotProps { }

export interface IHMDBotState {
    moveHeader: string;
}

export default class HMDBot extends React.Component<IHMDBotProps, IHMDBotState> {
    constructor(props: IHMDBotProps) {
        super(props);
        this.state = {
            moveHeader: "45%"
        }

    }

    public render(): React.ReactElement<IHMDBotProps> {
        return (
            <div className={styles.Container}>
                <div className={styles.botBody}>

                    <MDBIcon style={{ left: this.state.moveHeader,bottom: this.state.moveHeader === "83%" ? "10%" : "9.5%", fontSize: this.state.moveHeader === "83%" ? "2.2em" : "3em" }}
                        onClick={() => this.setState({ moveHeader: this.state.moveHeader !== "83%" ? "83%" : "45%" })} className={styles.botHeader} size='3x' fas icon="grin" />
                    <input style={{
                        position: "absolute",
                        width: "70%",
                        bottom: "10%",
                        left: "12%"
                    }}
                        hidden={this.state.moveHeader !== "83%"}
                        placeholder="Chat with me"
                        className={styles.bottextArea} type="text" />
                </div>
                {/* </div> */}
            </div>
        );
    }
}
