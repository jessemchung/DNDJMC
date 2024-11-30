export interface AdminGetMembersOverTime {
  start_date: string          // "2024-3-9"  NOTE: used with formatDateForSql
  end_date: string            // "2024-4-9"  NOTE: used with formatDateForSql
  service_locations?: string  // "%" or "382"
  service_plan_id?: unknown   // shrug
  new_members_only?: boolean  // shrug
}

export interface RyuutamaWeather {

}

export interface RyuutamaTerrain {

}

export interface RyuutamaFreeps {

}

export interface RyuutamaCreeps {

}

