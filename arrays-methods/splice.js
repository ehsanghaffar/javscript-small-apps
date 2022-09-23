const values = [1, 2, 4, 5, 6];

values;
values.splice(2, 0, 3);
values;
values.splice(2, 1);
values;

const unchanging = [1, 2, 4, 5, 6];
const copy = [...unchanging];
copy.splice(2, 0, 3);
copy;
unchanging;
