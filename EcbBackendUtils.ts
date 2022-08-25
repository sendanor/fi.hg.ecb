// Copyright (c) 2022. Heusala Group Oy <info@heusalagroup.fi>. All rights reserved.

import { Currency } from "../core/types/Currency";
import { CurrencyRates } from "../core/types/CurrencyRates";
import { fetch } from "ecb-euro-exchange-rates";

export class EcbBackendUtils {

    /**
     * Fetch ECB rates
     */
    static async fetchEuroRates () : Promise<CurrencyRates> {
        const result = await fetch();
        return {
            [Currency.USD]: result.rates.USD,
            [Currency.GBP]: result.rates.GBP
        };
    }

}
