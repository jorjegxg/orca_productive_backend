import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';
import { AppUser } from './app-user.entity';

export enum PremiumType {
  GOLD = 'gold',
  PRERELEASE = 'prerelease',
  FOUNDER = 'founder',
}

@Entity('PrereleasePremium')
export class PrereleasePremium {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({
    type: 'enum',
    enum: PremiumType,
  })
  typeOfPremium: PremiumType;

  @Column({ type: 'timestamp' })
  createionDate: Date;

  @ManyToOne(() => AppUser, (user) => user.prereleasePremiums, {
    onDelete: 'CASCADE',
  })
  user: AppUser;
}
