import { interfaces as inversifyInt } from 'inversify';
import { Type } from '@/core/lib';

export interface Container extends inversifyInt.Container {}

export interface ContainerRequest {
  decorator: Type.DecoratorType;
  container: Type.Provider;
}