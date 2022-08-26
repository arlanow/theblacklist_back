export class CreateUnitDto {
  title!: string;
  country?: string;
  url?: string;
  description?: string;
  type!: number;
  iconId?: number;
}
