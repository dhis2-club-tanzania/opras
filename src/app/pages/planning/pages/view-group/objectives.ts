import { Objective } from '../../shared/objective';

export const teachingStaffObjectives: Objective[] = [
  {
    name: 'Teaching',
    description:
      'To impact [module name] knowledge, skills and competencies to students of level [Level of study] for the fifteen weeks of the first semester of [Academic year].',
    agreements: [
      {
        performanceTarget:
          'Prepare and submit assessment plan before the beginning of the semester',
        perfromanceCriteria: 'Assessment plan prepared',
        resource: 'Curriculum',
      },
      {
        performanceTarget: 'Prepare teaching materials in time',
        perfromanceCriteria: 'Teaching materials prepared',
      },
    ],
    lastModified: new Date('2020-06-15'),
    applicable: true,
  },
  {
    name: 'Research',
    description:
      'To conduct research in order to find solutions and add a body of knowledge in the [Module name] field in transport sub sector and contribute for national development by the end of the second semester of [academic year]',
    lastModified: new Date('2020-07-10'),
    agreements: [],
    applicable: false,
  },
  {
    name: 'Publishing',
    description:
      'To contribute on improvement of [Module name] knowledge by publishing at least one [type of publication]',
    lastModified: new Date('2020-07-19'),
    applicable: true,
  },
  {
    name: 'Projects',
    description:
      "To enhance students' competence on [Module name] by supervising students' research work/project or extended assignment supervision by the end of each semester",
    lastModified: new Date('2020-07-10'),
    applicable: false,
  },
  {
    name: 'Supervision',
    description:
      'Assessing knowledge, skills and competencies level(Level of the study by of students of [field name] conducting supervision of industrial training/ field work by the end of first semester [academic year]',
    lastModified: new Date('2020-07-10'),
    applicable: false,
  },
  {
    name: 'Consultancy',
    description:
      'To provide contribution on the improvement of public service and private sector through consultancy or extension work',
    lastModified: new Date('2020-07-10'),
    applicable: false,
  },
];
export const administrativeStaffObjectives: Objective[] = [
  {
    name: 'Reduce HIV/AIDS infections',
    lastModified: new Date('2020-06-15'),
    applicable: true,
  },
  {
    name: 'Improve University capacity',
    lastModified: new Date('2020-07-10'),
    applicable: false,
  },
  {
    name:
      'Change in the level staff’s satisfaction with services satisfaction provided by the Management',
    lastModified: new Date('2020-07-19'),
    applicable: true,
  },
  {
    name:
      "Increase level of Stakeholders' satisfication with University Operations",
    lastModified: new Date('2020-07-10'),
    applicable: false,
  },
  {
    name: 'Incentive scheme in place',
    lastModified: new Date('2020-07-10'),
    applicable: false,
  },
  {
    name: 'Establish VCT',
    lastModified: new Date('2020-07-10'),
    applicable: false,
  },
  {
    name: 'Succession plan in place',
    lastModified: new Date('2020-07-10'),
    applicable: true,
  },
  {
    name: 'Training policy in place',
    lastModified: new Date('2020-07-10'),
    applicable: true,
  },
];
