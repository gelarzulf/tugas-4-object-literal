let studentScore = [
    {
        name: 'Reva',
        score: 90
    },
    {
        name: 'Lala',
        score: 80
    },
    {
        name: 'Ratih',
        score: 100
    },
];

let higestScore = { name: '', score: 0 };

for (let student of studentScore) {
    if (student.score > higestScore.score) {
        higestScore = student;
    }
}

console.log(`Siswa dengan nilai tertinggi adalah ${higestScore.name} dengan nilai ${higestScore.score}`);