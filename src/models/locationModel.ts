/**
 * VONQ Hiring APILib
 *
 * This file was automatically generated for VONQ by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { array, expandoObject, lazy, number, Schema, string } from '../schema';
import { PlaceTypeEnum, placeTypeEnumSchema } from './placeTypeEnum';

/** Location(id, canonical_name, desq_name_en, desq_country_code, country_code, mapbox_id, mapbox_text, mapbox_placename, mapbox_context, mapbox_place_type, mapbox_shortcode, mapbox_within) */
export interface LocationModel {
  id: number;
  fullyQualifiedPlaceName: string;
  canonicalName: string;
  boundingBox: number[];
  area: number;
  placeType: PlaceTypeEnum;
  within: LocationModel;
  [key: string]: unknown;
}

export const locationModelSchema: Schema<LocationModel> = expandoObject({
  id: ['id', number()],
  fullyQualifiedPlaceName: ['fully_qualified_place_name', string()],
  canonicalName: ['canonical_name', string()],
  boundingBox: ['bounding_box', array(number())],
  area: ['area', number()],
  placeType: ['place_type', placeTypeEnumSchema],
  within: ['within', lazy(() => locationModelSchema)],
});
