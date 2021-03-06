require Logger
defmodule Txportal.PotatoController do
  use Txportal.Web, :controller

  @db_url "http://10.50.100.213:5984"

  def view_results(conn, %{"db" => db, "design" => design, "view" => view}) do
    HTTPoison.start
    url = @db_url <> "/#{db}/_design/#{design}/_view/#{view}"

    rv = HTTPoison.get url
    rv_json = case rv do
             {:ok, resp} -> resp.body
             _ -> %{"Error" => "Failed to connect to database"}
           end
    text conn, rv_json
  end

  def key_results(conn, %{"db" => db, "design" => design, "view" => view, "key" => key}) do
    HTTPoison.start
    url = @db_url <> "/#{db}/_design/#{design}/_view/#{view}?key=#{key}"

    rv = HTTPoison.get url
    rv_json = case rv do
             {:ok, resp} -> resp.body
             _ -> %{"Error" => "Failed to connect to database"}
           end
    text conn, rv_json
  end

  def key_range_results(conn, %{"db" => db, "design" => design, "view" => view, "startkey" => startkey, "endkey" => endkey}) do
    HTTPoison.start
    url = @db_url <> "/#{db}/_design/#{design}/_view/#{view}?startkey=#{startkey}&endkey=#{endkey}"

    rv = HTTPoison.get url
    rv_json = case rv do
             {:ok, resp} -> resp.body
             _ -> %{"Error" => "Failed to connect to database"}
           end
    text conn, rv_json
  end
end
