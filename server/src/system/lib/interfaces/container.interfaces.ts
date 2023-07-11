import { interfaces as inversifyInt } from 'inversify';
import { Type } from '@/system/lib';

export interface Container extends inversifyInt.Container {}

export interface ContainerRequest {
  decorator: Type.DecoratorType;
  container: Type.ContainerType;
}