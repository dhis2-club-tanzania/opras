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
        performanceCriteria: 'Assessment plan prepared',
        resource: 'Curriculum',
      },
      {
        performanceTarget: 'Prepare teaching materials in time',
        performanceCriteria: 'Teaching materials prepared',
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
    name: 'Change in the level staff’s satisfaction with services satisfaction provided by the Management',
    lastModified: new Date('2020-07-19'),
    applicable: true,
  },
  {
    name: "Increase level of Stakeholders' satisfication with University Operations",
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
export const attributes: any[] = [
  {
    name: 'WORKING RELATIONSHIPS',
    quality_attributes: [
      { name: 'Ability to work in team' },
      { name: 'Ability to get on with other staff' },
      { name: 'Ability to gain respect from others' },
    ],
  },
  {
    name: 'COMMUNICATION AND LISTENING',
    quality_attributes: [
      { name: 'Ability to express in writing' },
      { name: 'Ability to express orally' },
      { name: 'Ability to listen and comprehend' },
      { name: 'Ability to train and develop subordinates ' },
    ],
  },
  {
    name: 'MANAGEMENT AND LEADERSHIP',
    quality_attributes: [
      { name: 'Ability to plan and organize' },
      { name: 'Ability to lead, motivate and resolve conflicts' },
      { name: 'Ability to initiate and innovate' },
    ],
  },
  {
    name: 'PERFOMANCE IN TERMS OF QUALITY',
    quality_attributes: [
      { name: 'Ability to deliver accurate and high quality output timely' },
      { name: 'Ability for resilience and persistence' },
    ],
  },
  {
    name: ' PERFORMANCE IN TERMS OF QUANTITY',
    quality_attributes: [
      { name: 'Ability to meet demand' },
      { name: 'Ability to handle extra work' },
    ],
  },
  {
    name: 'RESPONSIBILITY AND JUDGEMENT',
    quality_attributes: [
      { name: 'Ability to accept and fulfil responsibility' },
      { name: 'Ability to make right decisions' },
    ],
  },
  {
    name: 'CUSTOMER FOCUS',
    quality_attributes: [{ name: 'Ability to respond well to the customer' }],
  },
  {
    name: 'LOYALTY',
    quality_attributes: [
      { name: 'Ability to demonstrate follower ship skills ' },
      { name: 'Ability to provide ongoing support to supervisor(s)' },
      { name: 'Ability to comply with lawful instructions of supervisors' },
    ],
  },
  {
    name: 'INTEGRITY',
    quality_attributes: [
      {
        name: 'Ability to devote working time exclusively to work related duties',
      },
      {
        name: 'Ability to provide quality services without need for any inducements',
      },
      {
        name: 'Ability to apply knowledge abilities to benefit Government and not for personal gains',
      },
    ],
  },
];
