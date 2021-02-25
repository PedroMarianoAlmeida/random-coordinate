import minuteQueue from './update-tracking-minute-endpoint';

export default async (req, res) => {
    console.log(`Updating minute coordenate`);

    await minuteQueue.enqueue(
        "",
        {
            repeat: {
                every: "1min",
            },
        }
    );
    res.status(200).end();

}