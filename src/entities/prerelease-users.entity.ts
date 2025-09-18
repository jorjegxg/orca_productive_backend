import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';
import { AppUser } from './app-user.entity';

@Entity('PrereleaseUsers')
export class PrereleaseUsers {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: 'timestamp' })
  date: Date;

  @ManyToOne(() => AppUser, (user) => user.prereleaseUsers, {
    onDelete: 'CASCADE',
  })
  user: AppUser;
}
