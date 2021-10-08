import {message} from 'antd'


const fetchAvailableWorkerIdsBySlotId= (availableWorker, slotId) => {
    if(availableWorker){
        return availableWorker && availableWorker.find((worker) => worker.slot_id === slotId ).availableWorker_ids
    }
}

const filterAvailableWorkerByWorkerId = (totalWorkers, workerId) =>  totalWorkers.find((worker) => worker.id === workerId );

export const filterAvailableWorkersBySlotId =  (totalWorkers, availableWorker, slotId) => {
    const availableWorkerIds = fetchAvailableWorkerIdsBySlotId(availableWorker,slotId);
    const workers= [];
    if(availableWorkerIds !== null){
        availableWorkerIds.map((workerId) => {
            const worker = filterAvailableWorkerByWorkerId(totalWorkers, workerId);
            workers.push(worker)
        })
    }
    return workers;
}


export const fetchAvailableWorker = (setAvailableWorker) => {
    fetch('https://storage.googleapis.com/urban-technical/available-workers.json',{
        method: 'GET',
    })
        .then(response => response.json()).then((res) => setAvailableWorker(res['available-workers'])).catch((() =>  message.warning('Not able fetch available worker. Please try again!')))
}