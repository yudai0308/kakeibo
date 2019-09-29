@extends('layouts.app')
@section('content')
<div id="account-page" data-account-id="{{$id}}" data-account-title="{{$title}}"></div>
<!-- <form method="post" action="/api/item">
    @csrf
    <input type="hidden" name="id" value="1">
    <input type="hidden" name="date" value="2019/9/1">
    <div class="form-group">
        <label class="form-label" for="form-item-name">項目</label>
        <input name="name" placeholder="食費、外食費、日用品 etc" required="" type="text" id="form-item-name" class="mb-2 form-control">
        <div role="toolbar" class="btn-toolbar">
            <button type="button" class="mr-2 btn btn-secondary btn-sm">食費</button>
            <button type="button" class="mr-2 btn btn-secondary btn-sm">外食費</button>
            <button type="button" class="mr-2 btn btn-secondary btn-sm">日用品</button>
            <button type="button" class="mr-2 btn btn-secondary btn-sm">交際費</button>
        </div>
    </div>
    <div class="form-group">
        <label class="form-label" for="form-item-amount">金額（円）</label>
        <input name="amount" placeholder="半角数字のみ" min="1" required="" type="number" id="form-item-amount" class="mb-2 form-control">
    </div>
    <div class="form-group">
        <div role="toolbar" class="btn-toolbar">
            <div role="group" class="btn-group btn-group-toggle">
                <label class="btn active btn-info">
                    <input name="isIncome" type="radio" autocomplete="off" value="0" checked="">
                    費用
                </label>
                <label class="btn btn-info">
                    <input name="isIncome" type="radio" autocomplete="off" value="1">
                    収入
                </label>
            </div>
        </div>
    </div>
    <div class="text-right">
        <button type="submit" class="btn btn-primary">完了</button>
    </div>
</form> -->
@endsection
