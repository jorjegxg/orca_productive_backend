import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';
import { AppUser } from './app-user.entity';
import { Skin } from './skin.entity';

@Entity('UserXSkin')
export class UserXSkin {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: 'varchar', length: 255, nullable: true })
  name: string;

  @ManyToOne(() => AppUser, (user) => user.userXSkin, { onDelete: 'CASCADE' })
  user: AppUser;

  @ManyToOne(() => Skin, (skin) => skin.userXSkin, { onDelete: 'CASCADE' })
  skin: Skin;
}
