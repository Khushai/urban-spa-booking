import React, {useContext} from "react";
import {Details, WorkerDetail, WorkerSection} from "./styled";
import {Radio,Rate} from 'antd';
import workerImage from "../../images/worker-image.jpeg";
import { GlobalStateContext} from "../../context/globalContextProvider";


function WorkerComponent({handleOnWorkerSelect,selectedWorker}){
    const state = useContext(GlobalStateContext);
    console.log(handleOnWorkerSelect,selectedWorker,state)
    return(
        <Radio.Group onChange={handleOnWorkerSelect} value={selectedWorker}>
            {state.workers.length > 0 && (
                state.workers.map((worker) => (
                    <WorkerSection key={`worker${worker.id}`}>
                        <Radio value={worker} disabled={selectedWorker.id === worker.id} data-testid={'worker-radio'}>
                            <WorkerDetail>
                                <img src={workerImage} width={80} alt="worker_image"/>
                                <Details>
                                    <div>
                                        <h4>{worker.name}</h4>
                                    </div>

                                    <div>
                                        <span>{worker.rating}<Rate allowHalf={true} defaultValue={worker.rating} disabled/></span>
                                    </div>
                                </Details>
                            </WorkerDetail>
                        </Radio>
                    </WorkerSection>
                ))
            )}
        </Radio.Group>
    )
}

export default WorkerComponent