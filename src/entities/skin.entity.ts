import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { UserXSkin } from './user-x-skin.entity';

@Entity('Skin')
export class Skin {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: 'varchar', length: 255 })
  name: string;

  @OneToMany(() => UserXSkin, (uxs) => uxs.skin)
  userXSkin: UserXSkin[];
}
