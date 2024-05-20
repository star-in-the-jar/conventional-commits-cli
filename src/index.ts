import os from 'os';
import path from 'path';
import config from '../config.json'

const choices = ['Option 1', 'Option 2', 'Option 3'];

const questions = [
    {
        type: 'list',
        name: 'choice',
        message: 'Please select an option:',
        choices: choices,
    },
];

const gitmojis = config.gimojis.path
    ? require(config.gimojis.path)
    : require(path.join(os.homedir(), '.gitmoji', 'gitmojis.json'));

interface DataObj {
    name: string
    value: string
    description?: string
}

type Type = string
type TypeObj = DataObj
type Gitmoji = string
type GitmojiObj = DataObj
type Scope = string

interface ScopeObj extends DataObj {
    complementary?: string
}

interface Config {
    type: TypeObj[];
    scope: ScopeObj[];
    gimojis: {
        path: string;
    }
    favorites: {
        gitmojis: Gitmoji[];
        scopes: Scope[];
        types: Type[];
    }
}

const main = (): void => {

}

const getTypes = (): TypeObj[] => config.type

const getScopes = (): ScopeObj[] => config.scope

const getGitmojis = (): GitmojiObj[] => gitmojis
