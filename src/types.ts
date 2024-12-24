export interface Registry {
  home: string;
  registry: string;
}

export type RegistryAlias =
  | 'npm'
  | 'tencent'
  | 'taobao'
  | 'mirror'
  | 'huawei'
  | 'up366'
  | 'up366Host'

export type RegistryConfig = Record<RegistryAlias, Registry>;
