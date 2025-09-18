import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { PrereleasePremium } from './prerelease-premium.entity';
import { PrereleaseUsers } from './prerelease-users.entity';
import { UserXSkin } from './user-x-skin.entity';

@Entity('AppUser')
export class AppUser {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: 'varchar', length: 255 })
  name: string;

  @Column({ type: 'varchar', length: 70, unique: true })
  email: string;

  @Column({ type: 'timestamp' })
  createionDate: Date;

  @OneToMany(() => PrereleaseUsers, (pr) => pr.user)
  prereleaseUsers: PrereleaseUsers[];

  @OneToMany(() => PrereleasePremium, (pp) => pp.user)
  prereleasePremiums: PrereleasePremium[];

  @OneToMany(() => UserXSkin, (uxs) => uxs.user)
  userXSkin: UserXSkin[];
}
