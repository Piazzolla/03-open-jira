interface SeedData {
    entries: SeedEntry[];
}

interface SeedEntry {
    description: string;
    status: string;
    createdAt: number;
}

export const seedData: SeedData = {
    entries: [  
    {
        description: 'Pendiente: Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum eius itaque accusamus quidem. Nostrum maxime corporis, quia aliquam, magni veniam soluta incidunt quibusdam asperiores cupiditate, in hic accusantium culpa ipsam.',
        status: 'pending',
        createdAt: Date.now()
     },
     {
        description: 'In-Progress: In sit cupidatat tempor duis proident reprehenderit ad.',
        status: 'in-progress',
        createdAt: Date.now() - 1000000
     },
     {
        description: 'Completed: Commodo eiusmod voluptate commodo velit non esse velit exercitation laborum elit nostrud non.',
        status: 'finished',
        createdAt: Date.now() - 100000
     },
]
}