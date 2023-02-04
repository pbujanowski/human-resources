import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity({ name: 'employees' })
export class Employee {
  @PrimaryGeneratedColumn('uuid', { name: 'id' })
  id: string;

  @Column('uuid', { name: 'user_id' })
  userId: string;

  @Column('nvarchar', { name: 'first_name', length: 50 })
  firstName: string;

  @Column('nvarchar', { name: 'last_name', length: 50 })
  lastName: string;

  @Column('nvarchar', { name: 'personal_id_number', length: 50 })
  personalIdNumber: string;

  @Column('date', { name: 'birthdate' })
  birthdate: string;
}
