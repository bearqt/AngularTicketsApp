using System;
using System.Collections.Generic;
using System.ComponentModel;
using System.ComponentModel.DataAnnotations;
using System.Text.Json.Serialization;
using Newtonsoft.Json;

namespace AngularTicketsApp.Data.Models
{
    public partial class DataAll
    {
        [JsonProperty(PropertyName = "ID операции")] 
        [Description("ID операции")] 
        public long? OperationId { get; set; }
        [JsonProperty(PropertyName = "Вид операции")] 
        [Description("Вид операции")] 
        public string? Type { get; set; }
        [JsonProperty(PropertyName = "Дата операции")] 
        [Description("Дата операции")] 
        public string? Time { get; set; }
        [JsonProperty(PropertyName = "Место проведения операции")] 
        [Description("Место проведения операции")] 
        public string? Place { get; set; }
        [JsonProperty(PropertyName = "Отправитель")] 
        [Description("Отправитель")] 
        public string? Sender { get; set; }
        [JsonProperty(PropertyName = "Дата транзакции")] 
        [Description("Дата транзакции")] 
        public DateTime? TransactionTime { get; set; }
        [JsonProperty(PropertyName = "Статус валидации")] 
        [Description("Статус валидации")] 
        public string? ValidationStatus { get; set; }
        // [JsonProperty(PropertyName = "Временная зона проведения операции")] 
        // [Description("Временная зона проведения операции")] 
        // public short? OperationTimeTimezone { get; set; }
        [JsonProperty(PropertyName = "ID пассажира")] 
        [Description("ID пассажира")] 
        public long? PassengerId { get; set; }
        [JsonProperty(PropertyName = "Фамилия")] 
        [Description("Фамилия")] 
        public string? Surname { get; set; }
        [JsonProperty(PropertyName = "Имя")] 
        [Description("Имя")] 
        public string? Name { get; set; }
        [JsonProperty(PropertyName = "Отчество")] 
        [Description("Отчество")] 
        public string? Patronymic { get; set; }
        [JsonProperty(PropertyName = "Дата рождения")] 
        [Description("Дата рождения")] 
        public string? Birthdate { get; set; }
        // [JsonProperty(PropertyName = "Идентификатор пола")] 
        // [Description("Идентификатор пола")] 
        // public decimal? GenderId { get; set; }
        [JsonProperty(PropertyName = "ID документа")] 
        [Description("ID документа")] 
        public long? PassengerDocumentId { get; set; }
        [JsonProperty(PropertyName = "Тип документа")] 
        [Description("Тип документа")] 
        public string? PassengerDocumentType { get; set; }
        [JsonProperty(PropertyName = "Номер документа")] 
        [Description("Номер документа")] 
        public string? PassengerDocumentNumber { get; set; }
        [JsonProperty(PropertyName = "Номер документа по инвалидности")]
        [Description("Номер документа по инвалидности")] 
        public string? PassengerDocumentDisabledNumber { get; set; }
        [JsonProperty(PropertyName = "Номер документа по многодетности")] 
        [Description("Номер документа по многодетности")] 
        public string? PassengerDocumentLargeNumber { get; set; }
        // [JsonProperty(PropertyName = "Идентификатор типа пассажира")] 
        // [Description("Идентификатор типа пассажира")] 
        // public decimal? PassengerTypeId { get; set; }
        [JsonProperty(PropertyName = "Тип пассажира")] 
        [Description("Тип пассажира")] 
        public string? PassengerTypeName { get; set; }
        [JsonProperty(PropertyName = "Тип типа пассажира")] 
        [Description("Тип типа пассажира")] 
        public string? PassengerTypeType { get; set; }
        [JsonProperty(PropertyName = "Группа учета РА")] 
        [Description("Группа учета РА")] 
        public string? RaCategory { get; set; }
        [JsonProperty(PropertyName = "Описание")] 
        [Description("Описание")] 
        public string? Description { get; set; }
        [JsonProperty(PropertyName = "Наличие квоты")] 
        [Description("Наличие квоты")] 
        public bool? IsQuota { get; set; }
        // [JsonProperty(PropertyName = "Идентификатор билета")] 
        // [Description("Идентификатор билета")] 
        // public long? TicketId { get; set; }
        [JsonProperty(PropertyName = "Номер билета")] 
        [Description("Номер билета")] 
        public string? TicketNumber { get; set; }
        [JsonProperty(PropertyName = "Тип билета")] 
        [Description("Тип билета")] 
        public decimal? TicketType { get; set; }
        // [JsonProperty(PropertyName = "Идентификатор маршрута авиакомпании")]
        // [Description("Идентификатор маршрута авиакомпании")] 
        // public long? AirlineRouteId { get; set; }
        [JsonProperty(PropertyName = "Перевозчик")] 
        [Description("Перевозчик")] 
        public string? AirlineCode { get; set; }
        [JsonProperty(PropertyName = "АП вылета")] 
        [Description("АП вылета")] 
        public string? DepartPlace { get; set; }
        [JsonProperty(PropertyName = "Дата вылета")] 
        [Description("Дата вылета")] 
        public string? DepartDatetime { get; set; }
        [JsonProperty(PropertyName = "АП прилета")] 
        [Description("АП прилета")] 
        public string? ArrivePlace { get; set; }
        [JsonProperty(PropertyName = "Дата прилета")]
        [Description("Дата прилета")] 
        public string? ArriveDatetime { get; set; }
        [JsonProperty(PropertyName = "Номер бронирования")] 
        [Description("Номер бронирования")] 
        public string? PnrId { get; set; }
        [JsonProperty(PropertyName = "Код операционного перевозчика")] 
        [Description("Код операционного перевозчика")] 
        public string? OperatingAirlineCode { get; set; }
        // [JsonProperty(PropertyName = "Временная зона отправления")] 
        // [Description("Временная зона отправления")] 
        // public short? DepartDatetimeTimezone { get; set; }
        // [JsonProperty(PropertyName = "Временная зона прибытия")] 
        // [Description("Временная зона прибытия")] 
        // public short? ArriveDatetimeTimezone { get; set; }
        // [JsonProperty(PropertyName = "Код города вылета")] 
        // [Description("Код города вылета")] 
        // public string CityFromCode { get; set; }
        [JsonProperty(PropertyName = "Город вылета")] 
        [Description("Город вылета")] 
        public string? CityFromName { get; set; }
        // [JsonProperty(PropertyName = "Код ИКАО аэропорта отправления")] 
        // [Description("Код ИКАО аэропорта отправления")] 
        // public string AirportFromIcaoCode { get; set; }
        // [JsonProperty(PropertyName = "Код аэропорта отправления")] 
        // [Description("Код аэропорта отправления")] 
        // public string AirportFromRfCode { get; set; }
        [JsonProperty(PropertyName = "Аэропорт вылета")]
        [Description("Аэропорт вылета")] 
        public string? AirportFromName { get; set; }
        // [JsonProperty(PropertyName = "Код города прибытия")]
        // [Description("Код города прибытия")] 
        // public string CityToCode { get; set; }
        [JsonProperty(PropertyName = "Город прилета")]
        [Description("Город прилета")] 
        public string? CityToName { get; set; }
        // [JsonProperty(PropertyName = "Код ИКАО аэропорта прибытия")]
        // [Description("Код ИКАО аэропорта прибытия")] 
        // public string AirportToIcaoCode { get; set; }
        // [JsonProperty(PropertyName = "Код аэропорта прибытия")]
        // [Description("Код аэропорта прибытия")] 
        // public string AirportToRfCode { get; set; }
        [JsonProperty(PropertyName = "Аэропорт прилета")]
        [Description("Аэропорт прилета")] 
        public string? AirportToName { get; set; }
        [JsonProperty(PropertyName = "Рейсы")]
        [Description("Рейсы")] 
        public string? FlightNums { get; set; }
        [JsonProperty(PropertyName = "Код тарифа")]
        [Description("Код тарифа")] 
        public string? FareCode { get; set; }
        [JsonProperty(PropertyName = "Цена тарифа")]
        [Description("Цена тарифа")] 
        public int? FarePrice { get; set; }
    }
}
