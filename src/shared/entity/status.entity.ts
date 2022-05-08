import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';
import { CategoryStatusEnum }                     from '@shared/enum/status.enum';

@Entity({ name: 'status', synchronize: true, database: 'tecnoservi' })
export class StatusEntity {
  @PrimaryGeneratedColumn({
    type: 'int',
    name: 'id',
  })
  id: number;

  @Column()
  name: string;

  @Column()
  description: string;

  @Column({
    type: 'enum',
    enum: CategoryStatusEnum,
    default: CategoryStatusEnum.USER,
  })
  category: CategoryStatusEnum;
}
