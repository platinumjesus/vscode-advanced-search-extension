import { workspace } from 'vscode';
import SearchProviderDefinition from '../search/SearchProviderDefinition';
/**
 *  Extnsion configuration interface
 */

const EXTENSION_NAME = "websearch";
const DEFAULT_PROVIDER = "WebSearchProvider";
const CONFIG = workspace.getConfiguration(EXTENSION_NAME);

export function isValid(): boolean {
    if (!CONFIG.has("searchProviders")) { return false; }
    return true;
}

export function getSearchProvidersFromConfig(): SearchProviderDefinition[] {
    return CONFIG.get("searchProviders") as SearchProviderDefinition[];
}

export function getSearchProviderDefinitionByName(name: string): SearchProviderDefinition {
    return getSearchProvidersFromConfig().find(obj => obj.name === name) || 
            new SearchProviderDefinition();
}

export function getDefaultProvider() { return DEFAULT_PROVIDER; }