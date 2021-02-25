import minuteQueue from './update-tracking-minute-endpoint';

export default async (req, res) => {
    console.log(`Updating minute coordenate`);

    await minuteQueue.enqueue(
        "",
        {
            repeat: {
                every: "12h", //I changed the periodicity to last the entire month for free
            },
        }
    );
    res.status(200).end();

}