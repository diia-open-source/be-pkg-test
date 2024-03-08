import { cloneDeep, merge } from 'lodash'
import { PartialDeep } from 'type-fest'

import { DriverLicense, EResidency, ForeignPassport, InternalPassport, TaxpayerCard } from '@diia-inhouse/types'

import { driverLicense } from './stubs/documents/driverLicense'
import { eResidency } from './stubs/documents/eResidency'
import { foreignPassport } from './stubs/documents/foreignPassport'
import { internalPassport } from './stubs/documents/internalPassport'
import { taxpayerCard } from './stubs/documents/taxpayerCard'

export default class DocumentsGenerator {
    getDriverLicense(data: PartialDeep<DriverLicense> = {}): DriverLicense {
        return merge(cloneDeep(driverLicense), data)
    }

    getInternalPassport(data: PartialDeep<InternalPassport> = {}): InternalPassport {
        return merge(cloneDeep(internalPassport), data)
    }

    getForeignPassport(data: PartialDeep<ForeignPassport> = {}): ForeignPassport {
        return merge(cloneDeep(foreignPassport), data)
    }

    getTaxpayerCard(data: PartialDeep<TaxpayerCard> = {}): TaxpayerCard {
        return merge(cloneDeep(taxpayerCard), data)
    }

    getEResidency(data: PartialDeep<EResidency> = {}): EResidency {
        return merge(cloneDeep(eResidency), data)
    }
}
