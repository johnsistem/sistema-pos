import { ObjectType, Field, Int, ID } from '@nestjs/graphql';
import { Product } from '../../products/entities/product.entity';
import { CategoryStatus, CategoryStatusType } from '../../utils/status';
import { Column, CreateDateColumn, DeleteDateColumn, Entity, OneToMany, PrimaryGeneratedColumn, UpdateDateColumn } from 'typeorm';

@Entity({ name: 'categories' })
@ObjectType()
export class Category {
  
  @PrimaryGeneratedColumn("uuid")
  @Field(() => ID)
  category_id: string;
 

  @Column({ type: 'varchar', length: 50 })
  @Field(() => String)
  category: string;

  @Column({ type: 'varchar', length: 250, nullable: true })
  @Field(() => String, { nullable: true })
  description: string;

  @Column({
    type: 'enum',
    enum: [
      CategoryStatus.INACTIVE,
      CategoryStatus.ACTIVE,
    ],
    default: CategoryStatus.ACTIVE,
  })
  @Field(() => String)
  status: CategoryStatusType;

  @Field(() => Product, { nullable: true })
  @OneToMany(() => Product, (product) => product.category)
  product: Product[];

  @Field(() => Date)
  @CreateDateColumn({
    name: 'created_at',
    type: 'timestamptz',
    default: () => 'CURRENT_TIMESTAMP',
  })
  createdAt: Date;

  @Field(() => Date)
  @UpdateDateColumn({
    name: 'updated_at',
    type: 'timestamptz',
    default: () => 'CURRENT_TIMESTAMP',
  })
  updatedAt: Date;

  @DeleteDateColumn({
    name: 'deleted_at',
    type: 'timestamptz',
  })
  deletedAt?: Date;
}
