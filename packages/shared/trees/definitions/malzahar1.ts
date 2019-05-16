const malzahar1 = {
    title: 'Path Of The Dark Prophecies',
    name: 'malzahar1',
    championId: 90,
    leaves: [
        {
            trophyName: 'hextechLord',
            x: 0,
            y: 0,
            parents: []
        },
        {
            trophyName: 'smartness',
            x: 2,
            y: 0,
            parents: []
        },
        {
            trophyName: 'theCompanion',
            x: 4,
            y: 0,
            parents: []
        },
        {
            trophyName: 'appetizer',
            x: 6,
            y: 0,
            parents: []
        },
        {
            trophyName: 'billGates',
            x: 1,
            y: 1,
            parents: ['hextechLord', 'smartness']
        },
        {
            trophyName: 'darkBinding',
            x: 5,
            y: 1,
            parents: ['theCompanion', 'appetizer']
        },
        {
            trophyName: 'wizard',
            x: 3,
            y: 2,
            parents: ['billGates', 'darkBinding']
        }
    ]
};

export default malzahar1;
