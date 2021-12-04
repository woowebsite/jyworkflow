enum JobTaxonomy {
  New = 13,
  Todo = 5,
  Retouch = 6,
  Demo = 15,
  Blend = 7,
  Finish = 8,
}

export default JobTaxonomy;

export function getPreviousJobTaxonomy(current: JobTaxonomy | number) {
  switch (current) {
    case JobTaxonomy.New:
      return null;
    case JobTaxonomy.Todo:
      return JobTaxonomy.New;
    case JobTaxonomy.Blend:
      return JobTaxonomy.Todo;
    case JobTaxonomy.Demo:
      return JobTaxonomy.Blend;
    case JobTaxonomy.Retouch:
      return JobTaxonomy.Demo;
    case JobTaxonomy.Finish:
      return JobTaxonomy.Retouch;
  }
}
