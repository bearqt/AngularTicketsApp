FROM mcr.microsoft.com/dotnet/aspnet:6.0 AS base
WORKDIR /app
EXPOSE 80
EXPOSE 443

FROM mcr.microsoft.com/dotnet/sdk:6.0 AS build
WORKDIR /src
COPY ["AngularTicketsApp/AngularTicketsApp.csproj", "AngularTicketsApp/"]
RUN dotnet restore "AngularTicketsApp/AngularTicketsApp.csproj"
COPY . .
WORKDIR "/src/AngularTicketsApp"
RUN dotnet build "AngularTicketsApp.csproj" -c Release -o /app/build

FROM build AS publish
RUN dotnet publish "AngularTicketsApp.csproj" -c Release -o /app/publish

FROM base AS final
WORKDIR /app
COPY --from=publish /app/publish .
ENTRYPOINT ["dotnet", "AngularTicketsApp.dll"]
