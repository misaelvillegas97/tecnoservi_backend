import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';
import { CategoryStatusEnum }                     from '@shared/enum/status.enum';

@Entity('status')
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
    default: 'active',
  })
  category: CategoryStatusEnum;
}
